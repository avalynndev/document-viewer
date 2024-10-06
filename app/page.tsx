"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload, XCircle } from "lucide-react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";
import {
  Annu,
  AnnuTrigger,
  AnnuContent,
  AnnuHeader,
  AnnuTitle,
  AnnuDescription,
  AnnuBody,
} from "@/components/ui/annu";
import Link from "next/link";
import localFont from "next/font/local";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function FileUpload() {
  const [selectedDocs, setSelectedDocs] = useState<File[] | null>(null);

  const handleRemove = () => {
    setSelectedDocs(null);
    // document.getElementById("file")?.click();
  };

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex items-center justify-center">
        <section className="space-y-6 py-12 sm:py-20 lg:py-24">
          <div className="container flex max-w-screen-md flex-col items-center gap-5 text-center">
            <h1 className="text-balance text-[40px] font-black leading-[1.15] tracking-tight sm:text-5xl md:text-6xl md:leading-[1.15]">
              Document{" "}
              <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Viewer
              </span>
            </h1>

            <p className="max-w-2xl text-balance text-muted-foreground sm:text-lg">
              Simple. Robust. <b>Document Viewer</b>. <br /> Access a wide range
              of
              <Annu>
                <AnnuTrigger asChild>
                  <Link href="/"> file formats </Link>
                </AnnuTrigger>
                <AnnuContent>
                  <AnnuHeader>
                    <AnnuTitle>Supported File Formats</AnnuTitle>
                    <AnnuDescription>
                      List of File Formats which you can use view your files
                    </AnnuDescription>
                  </AnnuHeader>
                  <AnnuBody
                    className={`space-y-4 pb-4 text-center text-sm text-muted-foreground sm:pb-0 sm:text-left ${geistMono.className}`}
                  >
                    BMP, CSV, ODT, DOC, DOCX, GIF, HTM, HTML, JPG, JPEG, PDF,
                    PNG, PPT, PPTX, TIFF, TXT, XLS, XLSX
                  </AnnuBody>
                </AnnuContent>
              </Annu>
              to view seamlessly on this platform.
            </p>

            <div className="flex justify-center space-x-2">
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
                rounded="2xl"
                size="lg"
                className="gap-2 px-5 text-[15px]"
              >
                <span>Upload File</span>
                <Upload className="size-4" />
              </Button>
              <Button
                disabled={!selectedDocs}
                variant="outline"
                rounded="2xl"
                size="lg"
                className="gap-2 px-4 text-[15px]"
                onClick={() => {
                  handleRemove();
                }}
              >
                <p>
                  <span className="hidden sm:inline-block">Remove</span> File
                </p>
                <XCircle className="size-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>
      {selectedDocs && (
        <DocViewer
          documents={selectedDocs.map((file) => ({
            uri: window.URL.createObjectURL(file),
            fileName: file.name,
          }))}
          pluginRenderers={DocViewerRenderers}
        />
      )}
    </div>
  );
}
