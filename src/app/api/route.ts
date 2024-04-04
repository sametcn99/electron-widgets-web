import { NextRequest, NextResponse } from "next/server";
import { getFilesInFolder, getFolderRefs } from "../firebase/utils";
import { storageRef } from "../firebase/firebase";

/**
 * Retrieves data from storage and returns it as a JSON response.
 * @param request - The request object containing information about the incoming request.
 * @returns A JSON response containing the retrieved data or an error message.
 */
export async function GET(request: NextRequest) {
  try {
    const root = await getFolderRefs(storageRef); // Retrieve the root folder references from the storage
    const data: Data = { users: [] }; // Initialize an object to store the data, starting with an empty array of users

    for (const folder of root) {
      // Iterate through each folder in the root folder
      const userFolders = await getFolderRefs(folder); // Retrieve the folder references inside the current folder
      const folders: Folder[] = []; // Initialize an array to store the folder information
      for (const userFolder of userFolders) {
        // Iterate through each user folder inside the current folder
        const files = await getFilesInFolder(userFolder); // Retrieve the files inside the user folder
        folders.push({
          // Add the folder information to the array
          owner: folder.name, // Store the owner of the folder
          folderName: userFolder.name, // Store the name of the user folder
          path: userFolder.fullPath, // Store the full path of the user folder
          filesInFolder: files, // Store the files inside the user folder
        });
      }

      data.users.push({
        // Add the user information to the data object
        UserName: folder.name, // Store the name of the user
        path: folder.fullPath, // Store the full path of the user folder
        folders: folders, // Store the array of folder information
      });
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      error: "An error occurred while fetching data",
      details: error,
    });
  }
}
