import React from 'react';
import { useHistory } from 'react-router';

const Posts = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory()
    const showComments = id => {
        const url = `post/${id}`
        history.push(url);
    }
    return (
        <div>
            <h3><strong>id : {id}</strong> {title}</h3>
            <p>{body}</p>
            <button onClick={() => showComments(id) }>show component</button>
            
        </div>
    );
};

export default Posts;