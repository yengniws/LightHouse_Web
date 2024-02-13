import { FC } from 'react';

interface Topic {
    id: number;
    title: string;
    body: string;
}

interface NavProps {
    topics: Topic[];
    onChangeMode: (id: number) => void;
}

const Nav: FC<NavProps> = (props) => {
    const lis = []
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(<li key={t.id}>
            <a id={t.id.toString()} href={'/read' + t.id} onClick={event => {
                event.preventDefault();
                props.onChangeMode(Number((event.target as HTMLAnchorElement).id));
            }}>{t.title}</a>
        </li>)
    }
    return <nav>
        <ol>
            {lis}
        </ol>
    </nav>
}

export default Nav;