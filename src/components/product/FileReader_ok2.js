import React from 'react'
import Main from '../template/Main'
import axios from 'axios'
import Papa from 'papaparse'
import ReactFileReader from 'react-file-reader';

const headerProps = {
  icon: 'product-hunt',
  title: 'Importa arquivo CSV',
  subtitle: 'Importa arquivos: CSV'
}


export default class FileReader extends React.Component {
//  class CsvRead extends React.Component {
    constructor(props) {
      super(props);
    }

    onChange = e => {
      let files = e.target.files;
      console.log(files);
      let fr = new FileReader();
      fr.onload = r => {
           console.log(r.target.result);
       };

       if (fr.readAsDataURL) {
         fr.readAsDataURL(files[0]);
      }
       else if (fr.readAsDataurl) {
         fr.readAsDataurl(files[0]);
      }

    
     //fr.readAsDataURL(files[0]);
  }


    handleFiles = files => {
      var reader = new FileReader();

      console.log('passo1');

      reader.onload = function(e) {
      // Use reader.result

      console.log('passo2');

      var csv = reader.result;
      var lines = csv.split("\n");
      var result = [];
      var headers=lines[0].split(",");
      for(var i=1;i<lines.length;i++){
        console.log('passo3');
        var obj = {};
        var currentline=lines[i].split(",");
        for(var j=0;j<headers.length;j++){
          obj[headers[j]] = currentline[j];
        }
        result.push(obj);
        }  
        //return result; //JavaScript object
        result= JSON.stringify(result); //JSON
      console.log(result);
      console.log('passo4');
    }
    console.log('passo5');
    //reader.readAsText(files[0]);
  }
  
    render() {
      return (
        /*<ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
          <button className='btn'>Upload</button>
        </ReactFileReader>*/

        <div onSubmit={this.onFormSubmit}>
          <h1>Upload File Here</h1>
          <input type="file" name="file" onChange={e => this.onChange(e)} />
        </div>
      );
    }
  }