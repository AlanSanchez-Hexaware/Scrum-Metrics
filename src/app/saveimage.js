const fs = require('fs');

export class SaveImage{

  saveImg(image, imagename){
    fs.writeFileSync(imagename,image);
  }

}
