import React, { Component } from 'react'
import styled from 'styled-components'

import Link from '../components/Link/Link.component'
import List from '../components/List/List.component'

const Profile_container = styled.div`
width: 50%;
margin: 10px auto;
`
const Profile_Avatar = styled.img`
width: 150px;
`

export default class Profile extends Component {
    constructor(){
        super(); 
        this.state = {
            data : [{}],
            loading : true ,
            repositories : []
        }
    }
    async componentDidMount(){
        const profile = await fetch('https://api.github.com/users/Abhishekdileep');
        const profileJSON =await  profile.json();
        
        if(profileJSON){
            const repositories = await fetch(profileJSON.repos_url);
            const repoJSON = await repositories.json()
            if(repoJSON){
           
                this.setState({
                    data :profileJSON,
                    loading : false,
                    repositories : repoJSON
                })
            }
        
            
    }
}
    
 render() {
        const { data , loading ,  repositories  } = this.state ;
        const items = [{
            "label" : "HTML url",
            "value" : <Link url={data.html_url} title='Github URL' />
        },
        {
            "label" : "Repos url",
            "value" : <Link url={data.repos_url} title='Repo URL' />
        },
        {
            "label" : "name",
            "value" : data.name
        },
        {
            "label" : "company",
            "value" : data.company
        },
        {
            "label" : "Location",
            "value" : data.location
        },
        {
            "label" : "Bio",
            "value" :  "Hey there"
        },
        {
            "label" : "Followers",
            "value" : data.followers
        }
    ];
    const project = repositories.map(({name , html_url })=>{
        return ({
            "label" : name ,
            "value" : <Link url={html_url} title={" Click to visit"} />
        })
    })
        if(loading)
            return(  <div>Loading ... </div>
            )
        else {
            return (<Profile_container >
            <Profile_Avatar src={data.avatar_url} alt="Avatar" className='Profile-avatar'></Profile_Avatar>
            <List items={items} />
            <List items={project} />
        </Profile_container>)
        }
        
            
}     
        
    
}

/*import React, { Component } from 'react'
import styled from 'styled-components'

import Link from '../components/Link/Link.component'
import List from '../components/List/List.component'

const Profile_container = styled.div`
width: 50%;
margin: 10px auto;
`
const Profile_Avatar = styled.img`
width: 150px;
`

export default class Profile extends Component {
    constructor(){
        super(); 
        this.state = {
           data : [{}],
           repositories : [],
           loadingProfile : true 
        }
    }
    async componentDidMount(){
        const profile = await fetch('https://api.github.com/users/Abhishekdileep');
        const profileJSON =await  profile.json();
        const repositories = await fetch(profileJSON.repos_url);
        const repoJSON = await repositories.json();
        
        if(profileJSON && repoJSON){
            this.setState({
                data :profileJSON,
                loading : false,
                repositories : repoJSON,
            })
          
            
        }
    }
    
    render() {
        const { data , loadingProfile ,repositories } = this.state ;
        const items = [{
            "label" : "HTML url",
            "value" : <Link url={data.html_url} title='Github URL' />
        },
        {
            "label" : "Repos url",
            "value" : <Link url={data.repos_url} title='Repo URL' />
        },
        {
            "label" : "name",
            "value" : data.name
        },
        {
            "label" : "company",
            "value" : data.company
        },
        {
            "label" : "Location",
            "value" : data.location
        },
        {
            "label" : "Bio",
            "value" :  "Hey there"
        },
        {
            "label" : "Followers",
            "value" : data.followers
        }
    ];
    const project = repositories.map(({name , html_url })=>{
        return ({
            "label" : name ,
            "value" : <Link url={html_url} title={"Github Repo "} />
        })
    })
            
    if(loadingProfile) return (<div>Loading .... </div>)
    else {
        return (    
               <Profile_container >
              <Profile_Avatar src={data.avatar_url} alt="Avatar"></Profile_Avatar>
          <List items={items} />
          <List items={project} />
      </Profile_container>
    )
    }
         
   
    }
}
*/