import { FC } from 'react';

interface ArticleProps {
    title: string;
    body: string;
}

const Article: FC<ArticleProps> = (props) => {
    return <article>
        <h2>{props.title}</h2>
        {props.body}
    </article>
}

export default Article;