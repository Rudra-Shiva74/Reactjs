import React from 'react';

export default function PostDetails(props) {
    return (
        <>
            <li dangerouslySetInnerHTML={{ __html: props.comments }} />
        </>
    );
}
