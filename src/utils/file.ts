import fs from "fs";

export async function deleteFile(filename: string): Promise<void> {
  try {
    await fs.promises.stat(filename);
  } catch {
    throw new Error("file not found");
  }
  await fs.promises.unlink(filename);
}
