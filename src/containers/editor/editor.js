import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useState } from 'react';

export default function EditorPage(){
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState();
    const handleEditorChange = (event, editor) => {
        setCurrentNote(editor.getData());
    }

    const handleSaveNote = () => {
        // Add the current note to the notes array
        let newNotes = [currentNote];
        setNotes(newNotes);
    }

    return <>
        <div style={{ padding: 20 }}>
            <CKEditor
                onReady={ editor => {
                    // Insert the toolbar before the editable area.
                    editor.ui.getEditableElement().parentElement.insertBefore(
                        editor.ui.view.toolbar.element,
                        editor.ui.getEditableElement()
                    );

                    this.editor = editor;
                } }
                onError={ ( error, { willEditorRestart } ) => {
                    // If the editor is restarted, the toolbar element will be created once again.
                    // The `onReady` callback will be called again and the new toolbar will be added.
                    // This is why you need to remove the older toolbar.
                    if ( willEditorRestart ) {
                        this.editor.ui.view.toolbar.element.remove();
                    }
                } }
                onChange={ handleEditorChange}
                editor={ ClassicEditor }
                data={currentNote}
                // config={ /* the editor configuration */ }
            />
        <button onClick={handleSaveNote}>Save Note</button>
        <h3>Saved Notes:</h3>
        <div className="notes-container">
            {notes.map((note, index) => {
                return <div key={index} className="note" dangerouslySetInnerHTML={{__html: note}} />
             })}
        </div>
        </div>
    </>;
}