import { useState } from "react";
import Article from './BoardArticle';
import Nav from './BoardNav';
import Create from './BoardCreate';
import Update from './BoardUpdate';



interface Topic {
    id: number;
    title: string;
    body: string;
}

const List = () => {
    const [mode, setMode] = useState<'WELCOME' | 'READ' | 'CREATE' | 'UPDATE'>('WELCOME');
    const [id, setId] = useState<number | null>(null);
    const [nextId, setNextId] = useState(4);

    const [topics, setTopics] = useState<Topic[]>([]);

    let content = null;
    let contextControl = null;

    if (mode === "WELCOME") {
        content = <Article title="Title" body=''></Article>
        contextControl = <>
            <a className="btn" href="/create" onClick={event => {
                event.preventDefault();
                setMode('CREATE');
            }}>글 작성</a>
        </>
    }
    else if (mode === 'READ') {
        let title = "", body = "";
        for (let i = 0; i < topics.length; i++) {
            if (topics[i].id === id) {
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = <Article title={title} body={body}></Article>
        contextControl = <>
            <a className="btn" href="/create" onClick={event => {
                event.preventDefault();
                setMode('CREATE');
            }}>글 작성</a>
            <a className="btn" href={'/update/' + id} onClick={event => {
                event.preventDefault();
                setMode('UPDATE');
            }}>글 수정</a>
            <input className="btn" type="button" value="글 삭제" onClick={() => {
                const newTopics = []
                for (let i = 0; i < topics.length; i++) {
                    if (topics[i].id !== id) {
                        newTopics.push(topics[i]);
                    }
                }
                setTopics(newTopics);
                setMode('WELCOME');
            }} />
        </>
    }
    else if (mode === 'CREATE') {
        content = <Create onCreate={(_title, _body) => {
            const newTopic = { id: nextId, title: _title, body: _body };
            const newTopics = [...topics];
            newTopics.push(newTopic);
            setTopics(newTopics);
            setMode('READ');
            setId(nextId);
            setNextId(nextId + 1);
        }}></Create>
    }
    else if (mode === 'UPDATE') {
        let title = "", body = "";
        for (let i = 0; i < topics.length; i++) {
            if (topics[i].id === id) {
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = <Update title={title} body={body} onUpdate={(title, body) => {
            if (id === null) {
                throw new Error('id is null');

            }
            const newTopics = [...topics]
            const updatedTopic = { id: id, title: title, body: body }
            for (let i = 0; i < newTopics.length; i++) {
                if (newTopics[i].id === id) {
                    newTopics[i] = updatedTopic;
                    break;
                }
            }
            setTopics(newTopics);
            setMode('READ');

        }}></Update>
    }
    return (
        <>
          <div className="background">
            <div className="titlebar">글 목록</div>
            <div className="titleList">
    
              <Nav topics={topics} onChangeMode={(_id) => {
                setMode('READ');
                setId(_id);
              }}></Nav>
            </div>
    
          </div>
        </>
      );
    
}

            export default List;