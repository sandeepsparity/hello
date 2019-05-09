import React from 'react';
import ReactDOM from 'react-dom';
import {Treebeard} from 'react-treebeard';


class Tree extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.onToggle = this.onToggle.bind(this);
    }
    onToggle(node, toggled){
        if(this.state.cursor){this.state.cursor.active = false;}
        node.active = true;
        if(node.children){ node.toggled = toggled; }
        this.setState({ cursor: node });
    }
    render(){
        const { data } = this.props;
        return (
             data.map((item, index)=>( 
              <Treebeard
                data={item}
                onToggle={this.onToggle}
                id={`${item.name}`}
            />))
           
        );
    }
}


export default Tree;
