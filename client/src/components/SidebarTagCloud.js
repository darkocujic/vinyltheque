import React, { useState, useEffect } from 'react';
import { TagCloud } from 'react-tagcloud';
import Axios from 'axios';

function SidebarTagCloud(props) {
    const [tags, setTags] = useState([]);
    const [tagsLoading, setTagsLoading] = useState(true)
    const options = {
        luminosity: 'darko',
        hue: 'blue',
      }
      
    useEffect(() => {
        Axios
        .get('http://localhost:3001/api/records/tags')
        .then((res) => {
            console.log(res.data)
            setTags(res.data)
            setTagsLoading(false)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    if (tagsLoading) {
        return (<div></div>)
    }

    return (
        <div style={{padding: '0 2em'}}>
            <TagCloud 
                minSize={18}
                maxSize={40}
                colorOptions={options}
                tags={tags}
                onClick={tag => props.updateSearch(tag.value)}
            />
        </div>
    );
}

export default SidebarTagCloud;