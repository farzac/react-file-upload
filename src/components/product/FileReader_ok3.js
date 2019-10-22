import React, {PureComponent} from 'react'

class FileReader extends PureComponent{
    constructor() {
        super();
        this.state = {
          image: ''
        };
      this.onChange = this.onChange.bind(this);
      }


    onChange(e){
        let files = e.target.files;
        let reader = new FileReader();

        console.log('files => ', files)

        

        if (reader.readAsDataURL) {
            reader.readAsDataURL(files[0]);
         }
          else if (reader.readAsDataurl) {
            reader.readAsDataurl(files[0]);
         }
        

        console.log('passo10')

       reader.onload = () =>{
        console.log('passo11')
           this.setState({ image: reader.result });
           console.log("file data ", this.image)
       }

        
    }

    render(){
        return(
            <div onSubmit={this.onFormSubmit}>
                <h1>React js File Upload </h1>
                <input type="file" name="file" onChange={(e) => this.onChange(e) } />
            </div>
        )
    }
}

export default FileReader