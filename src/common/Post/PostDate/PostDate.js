import React from 'react';

function PostDate(props) {

    const dateFormat = (dataStr) => {
        const date = new Date(dataStr);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return months[date.getMonth()] + ' ' + date.getDate();
    }

    return (
        <div>
            {dateFormat(props.date)}
        </div>
    );
}

export default PostDate;
