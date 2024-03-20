import { PageSection } from "@/components/page-section/PageSection";
import { useOctetDownload } from "@/hooks/useExportTools";
import { useT } from "@/hooks/useT";
import { useFileUploader } from "@/modules/drive/DriveTools";
import { usePostBackupImport } from "@/sdk/fireback/modules/workspaces/usePostBackupImport";
import { useState } from "react";
import { useQueryClient } from "react-query";

export function BackupSingleScreen() {
  const { upload } = useFileUploader();
  const t = useT();

  const { execute } = useOctetDownload({ path: "backup" });

  const queryClient = useQueryClient();
  const { submit } = usePostBackupImport({ queryClient });

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const download = () => {
    execute();
  };

  const handleUpload = (files: File[]) => {
    Promise.all(upload(files)).then((result) => {
      submit({ file: result[0] }).then((m) => {});
      setUploadedFiles((f) => [...f, result]);
    });
  };

  const onUploadDialog = () => {
    var input = document.createElement("input");
    input.type = "file";

    input.onchange = (e: any) => {
      handleUpload(Array.from(e.target.files));
    };

    input.click();
  };

  return (
    <>
      <PageSection title={t.backup.generateTitle}>
        <p>{t.backup.generateDescription}</p>

        <button onClick={download} className="btn btn-primary">
          {t.backup.generateAndDownload}
        </button>
      </PageSection>
      <PageSection title={t.backup.restoreTitle}>
        <p>{t.backup.restoreDescription}</p>

        <button onClick={onUploadDialog} className="btn btn-success">
          {t.backup.uploadAndRestore}
        </button>
      </PageSection>
    </>
  );
}
