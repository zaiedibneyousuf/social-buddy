import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const [post,setPost] = useState({})
    let {id} = useParams()
    const [comments,setComments] = useState([])

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data => setPost(data))
    },[])

    useEffect(() => {
        const url =`https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data => setComments(data))
    },[])

    return (
        <div>
            <h1>this is post details:{id}</h1>
            <p>User posted:{post.id}</p>
            <p>title:{post.title}</p>
            <p>body:{post.body}</p>
            <h3>Number of comments:{comments.length}</h3>
            {
                comments.map(comment => <Comment comment = {comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;