"use client";

import { useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";

export default function CkEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // Handle text formatting (Bold, Italic, Underline)
  const handleKeyCommand = (command: string) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  return (
    <div className="p-4 border rounded-md shadow-md w-full max-w-2xl">
      <div className="flex gap-2 mb-2">
        {/* <button
          className="px-3 py-1 bg-blue-500 text-white rounded"
          onMouseDown={(e) => {
            e.preventDefault();
            setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
          }}
        >
          Bold
        </button> */}
        {/* <button
          className="px-3 py-1 bg-green-500 text-white rounded"
          onMouseDown={(e) => {
            e.preventDefault();
            setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
          }}
        >
          Italic
        </button> */}
        {/* <button
          className="px-3 py-1 bg-yellow-500 text-black rounded"
          onMouseDown={(e) => {
            e.preventDefault();
            setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
          }}
        >
          Underline
        </button> */}
      </div>

      <div className="border p-3 min-h-[150px] cursor-text">
        <Editor editorState={editorState} handleKeyCommand={handleKeyCommand} onChange={setEditorState} />
      </div>
    </div>
  );
}
