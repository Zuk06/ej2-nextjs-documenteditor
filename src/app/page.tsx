'use client'
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);

export default function Home() {
  return (
    <>
      <h2>Syncfusion React Document Editor Component</h2>
      <DocumentEditorContainerComponent id="container" height={'590px'} serviceUrl="http://129.151.255.18:5000/api/documenteditor/" enableToolbar={true}>
      </DocumentEditorContainerComponent>
    </>
  )
}