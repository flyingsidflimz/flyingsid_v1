import { useEffect, useState } from "react";

const KEY = import.meta.env.VITE_DRIVE_API_KEY;

export default function useDrive(folderId) {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!folderId || !KEY) {
      setFiles([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const q = encodeURIComponent(`'${folderId}' in parents and trashed=false`);
    const fields = encodeURIComponent("files(id,name,mimeType,thumbnailLink,webViewLink,webContentLink)");
    const url = `https://www.googleapis.com/drive/v3/files?q=${q}&key=${KEY}&fields=${fields}&pageSize=1000`;

    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (data && data.files) {
          // Keep as-is; we will handle ordering. filter unsupported types out if needed
          setFiles(data.files);
        } else {
          setFiles([]);
        }
      })
      .catch((e) => {
        console.error("Drive fetch error:", e);
        setFiles([]);
      })
      .finally(() => setLoading(false));
  }, [folderId]);

  return { files, loading };
}
