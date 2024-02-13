import { FC } from 'react';

interface CreateProps {
    onCreate: (title: string, body: string) => void;
}

const Create: FC<CreateProps> = (props) => {
    return <article>
        <h2>글 작성</h2>
        <form onSubmit={event => {
            event.preventDefault();
            const form = event.target as HTMLFormElement;
            const title = form.elements.namedItem('title') as HTMLInputElement;
            const body = form.elements.namedItem('body') as HTMLTextAreaElement;
            props.onCreate(title.value, body.value);
        }}>
            <p>제목</p>
            <p><input type="text" name="title" placeholder="title" /></p>
            <p>내용</p>
            <p><textarea name="body" placeholder="body"></textarea></p>
            <p><input type="submit" value="작성 완료" /></p>
        </form>
    </article>
}

export default Create;