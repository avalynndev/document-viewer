"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, File as FileIcon, X } from "lucide-react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

export default function FileUpload() {
  const [selectedDocs, setSelectedDocs] = useState<File[] | null>(null);

  const handleRemove = () => {
    setSelectedDocs(null);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md mx-auto">
          <Label className="text-2xl font-extralight items-center flex flex-col justify-center">
            File Viewer
          </Label>
          <div className="space-y-4 pt-4">
            <div className="grid w-full items-center gap-1.5">
              <div className="flex items-center gap-2">
                <Input
                  id="file"
                  type="file"
                  multiple
                  onChange={(el) =>
                    el.target.files?.length &&
                    setSelectedDocs(Array.from(el.target.files))
                  }
                  className="hidden"
                />
                <Button
                  onClick={() => document.getElementById("file")?.click()}
                  className="w-full"
                >
                  <Upload className="mr-2 h-4 w-4" /> Choose File
                </Button>
              </div>
            </div>
            {selectedDocs && (
              <Card className="bg-muted">
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-background rounded-full p-2">
                      <FileIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium">{selectedDocs[0].name}</p>
                      <p className="text-sm text-muted-foreground">
                        {selectedDocs[0].name.split(".")[1]
                          ? selectedDocs[0].name.split(".")[1].toUpperCase()
                          : "Unknown"}
                        {" · "}
                        {(selectedDocs[0].size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-foreground"
                    onClick={handleRemove}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>{" "}
      {selectedDocs && (
        <DocViewer
          documents={selectedDocs.map((file) => ({
            uri: window.URL.createObjectURL(file),
            fileName: file.name,
          }))}
          pluginRenderers={DocViewerRenderers}
        />
      )}
    </>
  );
}
