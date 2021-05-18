import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './WritePage.scss';
import {Form,Button} from 'react-bootstrap'


function WritePage() {
        CKEditor.resizable=false;
    return (
        <div className="Container">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="title" placeholder="글 제목" />
                </Form.Group>
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p></p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
                <div className="mb-3">
                <Form.File id="formcheck-api-custom" custom>
                    <Form.File.Input isValid />
                    <Form.File.Label data-browse="Button text">
                        파일 업로드
                    </Form.File.Label>
                    <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                    </Form.File>
                </div>
            </Form>
            <Button variant="primary" type="submit">
                    작성
                </Button>
        </div>
    )
}

export default WritePage