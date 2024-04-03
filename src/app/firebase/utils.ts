import { listAll, ListResult, StorageReference } from "firebase/storage";

/**
 * Retrieves the references to all folders within a given storage path.
 *
 * @param path - The storage reference representing the path to retrieve folder references from.
 * @returns A promise that resolves to an array of StorageReference objects representing the folders.
 */
export const getFolderRefs = async (
  path: StorageReference,
): Promise<StorageReference[]> => {
  const folderRefs: StorageReference[] = [];

  try {
    const res: ListResult = await listAll(path);
    res.prefixes.forEach((folderRef) => {
      folderRefs.push(folderRef);
    });
    return folderRefs;
  } catch (error: any) {
    console.error(error);
    return [];
  }
};

/**
 * Retrieves the list of files in a given folder.
 *
 * @param path - The reference to the folder in the storage.
 * @returns A promise that resolves to an array of UserFiles.
 */
export const getFilesInFolder = async (
  path: StorageReference,
): Promise<UserFiles[]> => {
  const fileRefs: StorageReference[] = [];
  const files: UserFiles[] = [];

  try {
    const res: ListResult = await listAll(path);
    res.items.forEach((fileRef) => {
      fileRefs.push(fileRef);
      files.push({
        name: fileRef.name,
        path: fileRef.fullPath,
      });
    });
    return files;
  } catch (error) {
    console.error(error);
    return [];
  }
};
