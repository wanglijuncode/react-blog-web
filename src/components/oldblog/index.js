import React from 'react';

class goToOldBlog extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date:new Date(),
            num:10
        }
    }

    componentDidMount(){

       
    setTimeout(()=>{
      this.go()
    },10000);
        
    

    this.TimeId=setInterval(()=>{
          this.setState({
              date:new Date(),
              num:this.state.num-1>1 ? this.state.num-1 : 0
          })
    },1000)

    }
    componentWillUnmount(){
        clearInterval(this.TimeId)
    }

    go(){
       window.location="http://didiaojiemi.com";
    }

    render(){
        return (
            <div>
                <h1>朋友你好，还有{this.state.num}秒，就要进入老博客了哦！</h1>
                <p>现在是{this.state.date.toLocaleTimeString()}</p>
                <p>倒计时{this.state.num}秒</p>

            </div>
        )
    }
}

export default goToOldBlog;