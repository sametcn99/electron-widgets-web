type Data = {
  users: User[]; // Array of users
};

type User = {
  UserName: string; // User's name
  path: string; // User's path
  folders?: Folder[]; // Array of folders (optional)
};

type Folder = {
  owner: string; // Folder owner's name
  folderName: string; // Folder name
  path: string; // Folder path
  filesInFolder: UserFiles[]; // Array of files in the folder
};

type UserFiles = {
  name: string; // File name
  path: string; // File path
};
