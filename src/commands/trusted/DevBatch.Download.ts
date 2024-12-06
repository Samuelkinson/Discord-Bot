import { ChatInputCommandInteraction, EmbedBuilder } from "discord.js";
import CustomClient from "../../base/classes/CustomClient";
import SubCommand from "../../base/classes/SubCommand";
import BatchConfig from "../../base/schemas/BatchConfig";
import { generatePrefix, ValidURL } from "../../base/functions/random";
import ExcelJS from 'exceljs';


async function getBatchConfigData(guildID: string) {
    try {
        const data = await BatchConfig.findOne({ guildID });
        if (!data) {
            throw new Error('No data found');
        }
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export default class devBatchDownload extends SubCommand {
    constructor(client: CustomClient) {
        super(client, {
            name: "devbatch.download",
        });
    }

    async Execute(interaction: ChatInputCommandInteraction) {
        try {
            const data = await getBatchConfigData('1292621923263709254');

            const categories = ['dunks', 'aj1', 'aj3', 'aj4', 'af1', 'ye', 'other', 'ts'];
            const workbook = new ExcelJS.Workbook();

            // Function to create a worksheet for a category
            //@ts-expect-error
            const createCategorySheet = (category) => {
                const worksheet = workbook.addWorksheet(category.charAt(0).toUpperCase() + category.slice(1)); // Capitalize the sheet name

                // Define the columns in the worksheet
                worksheet.columns = [
                    { header: 'Name', key: 'name', width: 30 },
                    { header: 'Best Batch', key: 'Bestbatch', width: 15 },
                    { header: 'Budget Batch', key: 'Budgetbach', width: 15 },
                    { header: 'Extra Info', key: 'Extrainfo', width: 30 },
                    { header: 'Image URL', key: 'image', width: 50 },
                ];

                // Transform data for the specific category and add rows
                //@ts-expect-error
                const items = data[category]?.map(({ name, bestBatch, budgetBatch, extraInfo, image }) => ({
                    name,
                    Bestbatch: bestBatch,
                    Budgetbach: budgetBatch,
                    Extrainfo: extraInfo,
                    image: image
                })).slice(0, 24) || [];
                //@ts-expect-error
                items.forEach((item) => {
                    worksheet.addRow(item);
                });
            };

            // Create a worksheet for each category
            categories.forEach(category => {
                createCategorySheet(category);
            });

            // Generate the Excel file
            const filePath = './ProductData.xlsx';
            await workbook.xlsx.writeFile(filePath);
            console.log('Excel file generated successfully.');

        } catch (err) {
            console.error('Failed to load options:', err);
        }
    
        interaction.reply({content: "Test has benn ran!", ephemeral: true});
    
    }
}

