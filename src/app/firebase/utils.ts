import { listAll, ListResult, StorageReference } from "firebase/storage";

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

export const getFilesInFolder = async (
  path: StorageReference,
): Promise<StorageReference[]> => {
  const fileRefs: StorageReference[] = [];
  try {
    const res: ListResult = await listAll(path);
    res.items.forEach((fileRef) => {
      fileRefs.push(fileRef);
    });
    return fileRefs;
  } catch (error) {
    console.error(error);
    return [];
  }
};
