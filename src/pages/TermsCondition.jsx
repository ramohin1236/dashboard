import { useState } from "react";
import JoditEditor from "jodit-react";

const TermsCondition = () => {
  const [content, setContent] = useState();
  const [savedText, setSavedText] = useState("");

  const handleSave = () => {
    setSavedText(content);
  };

  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <div className="p-4 bg-gray-100 border-b">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Terms & Conditions Editor
        </h1>
      </div>

      {/* Full Page Editor */}
      <div className="flex-1">
        <JoditEditor
          value={content}
          onBlur={(newContent) => setContent(newContent)}
          onChange={() => {}}
          config={{
            readonly: false,
            height: "650px",
            width: "100%",
            resizable: false,
            style: {
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              overflowWrap: "break-word",
            },
          }}
          className="h-full w-full"
        />
      </div>

      {/* Save Button */}
      <div className="p-4 bg-gray-100 border-t flex justify-end">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Save
        </button>
      </div>

      {/* Preview (optional) */}
      {savedText && (
        <div className="w-full h-screen overflow-y-auto bg-white shadow-inner p-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">
            Saved Privacy Policy
          </h2>
          <div
            className="prose max-w-none break-words"
            dangerouslySetInnerHTML={{ __html: savedText }}
          />
        </div>
      )}
    </div>
  );
};

export default TermsCondition;
