import { FC, useState } from 'react';

interface UpdateProps {
    title: string;
    body: string;
    onUpdate: (title: string, body: string) => void;
}

const Update: FC<UpdateProps> = (props) => {
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);

    return <article>
        <h2>글 수정</h2>
        <form onSubmit={event => {
            event.preventDefault();
            const form = event.target as HTMLFormElement;
            const title = form.elements.namedItem('title') as HTMLInputElement;
            const body = form.elements.namedItem('body') as HTMLTextAreaElement;
            props.onUpdate(title.value, body.value)
        }}>
            <p>제목</p>
            <p><input type="text" name="title" placeholder="title" value={title} onChange={event => {
                setTitle(event.target.value);
            }} /></p>
            <p>내용</p>
            <p><textarea name="body" placeholder="body" value={body} onChange={event => {
                setBody(event.target.value);
            }}></textarea></p>
            <p><input type="submit" value="수정 완료" /></p>
        </form>
    </article>
}

export default Update;