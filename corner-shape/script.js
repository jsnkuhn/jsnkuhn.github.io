class cornerShape {
  static get inputProperties() { 
    return [
      '--corner-shapes',
      '--corner-sizes', 
      '--background-color', 
      '--border-width',
      '--border-color'
    ];}
  
  paint(ctx, geom, properties) { 
    const cornerShapes = properties.get('--corner-shapes').toString().trim().split(' ');
    const cornerSizes = properties.get('--corner-sizes').toString().replace(/px/g, '').trim().split(' ');
    const backgroundColor = properties.get('--background-color').toString();
    const borderWidth = properties.get('--border-width').toString();
    const borderColor = properties.get('--border-color').toString();

    let shapesLength = cornerShapes.length;
    switch (shapesLength) {
      case 1:
        cornerShapes[0] = cornerShapes[1] = cornerShapes[2] = cornerShapes[3];
        break;
      // case 4:
      //   cornerTLW = cornerTLH = cornerSizes[0];
      //   cornerTRW = cornerTRH = cornerSizes[1];
      //   cornerBRW = cornerBRH = cornerSizes[2];
      //   cornerBLW = cornerBLH = cornerSizes[3];
      //   break;
      case 3:
        cornerShapes[2] = cornerShapes[3];
        cornerShapes[1] = cornerShapes[2];
        break;
      case 2:
        cornerSizes[0] = cornerSizes[2];
        cornerSizes[1] = cornerSizes[3];
        break;
    }

    console.log(cornerShapes)

    let cornerTLW, cornerTLH, cornerTRW, cornerTRH, cornerBRW, cornerBRH, cornerBLW, cornerBLH; 

    let inputLength = cornerSizes.length;
    switch (inputLength) {
      case 1:
        cornerTLW = cornerTLH = cornerTRW = cornerTRH = cornerBRW = cornerBRH = cornerBLW = cornerBLH = cornerSizes[0];
        break;
      case 4:
        cornerTLW = cornerTLH = cornerSizes[0];
        cornerTRW = cornerTRH = cornerSizes[1];
        cornerBRW = cornerBRH = cornerSizes[2];
        cornerBLW = cornerBLH = cornerSizes[3];
        break;
      case 3:
        cornerTLW = cornerTLH = cornerSizes[0];
        cornerTRW = cornerTRH = cornerBLW = cornerBLH = cornerSizes[1];
        cornerBRW = cornerBRH = cornerSizes[2];
        break;
      case 2:
        cornerTLW = cornerTLH = cornerBRW = cornerBRH = cornerSizes[0];
        cornerTRW = cornerTRH = cornerBLW = cornerBLH = cornerSizes[1];
        break;
    }
    
    if(cornerSizes.includes('/')){
      
      var indexToSplit = cornerSizes.indexOf('/');
      const cornerWidths = cornerSizes.slice(0, indexToSplit);
      const cornerHeights = cornerSizes.slice(indexToSplit + 1);
      
//       function parseCorners(arrayLength, TL, TR, BR, BL, arrayName) {
//         switch (arrayLength) {
//           case 1:
//             TL = TR = BR = BL = arrayName[0];
//             break;
//           case 4:
//             TL = arrayName[0];
//             TR = arrayName[1];
//             BR = arrayName[2];
//             BL = arrayName[3];
//             break;
//           case 3:
//             TL = arrayName[0];
//             TR = BL = arrayName[1];
//             BR = arrayName[2];
//             break;
//           case 2:
//             TL = BR = arrayName[0];
//             TR = BL = arrayName[1];
//             break;
//         }
//       }
      
//       let widthsLength = cornerWidths.length;
//       parseCorners(widthsLength, cornerTLW, cornerTRW, cornerBRW, cornerBLW, cornerWidths);
      

      
      switch (widthsLength) {
        case 1:
          cornerTLW = cornerTRW = cornerBRW = cornerBLW = cornerWidths[0];
          break;
        case 4:
          cornerTLW = cornerWidths[0];
          cornerTRW = cornerWidths[1];
          cornerBRW = cornerWidths[2];
          cornerBLW = cornerWidths[3];
          break;
        case 3:
          cornerTLW = cornerWidths[0];
          cornerTRW = cornerBLW = cornerWidths[1];
          cornerBRW = cornerWidths[2];
          break;
        case 2:
          cornerTLW = cornerBRW = cornerWidths[0];
          cornerTRW = cornerBLW = cornerWidths[1];
          break;
      }
      
      // let heightsLength = cornerHeights.length;
      // parseCorners(heightsLength, cornerTLH, cornerTRH, cornerBRH, cornerBLH, cornerHeights);
      
      let heightsLength = cornerHeights.length;
      switch (heightsLength) {
        case 1:
          cornerTLH = cornerTRH = cornerBRH = cornerBLH = cornerHeights[0];
          break;
        case 4:
          cornerTLH = cornerHeights[0];
          cornerTRH = cornerHeights[1];
          cornerBRH = cornerHeights[2];
          cornerBLH = cornerHeights[3];
          break;
        case 3:
          cornerTLH = cornerHeights[0];
          cornerTRH = cornerBLH = cornerHeights[1];
          cornerBRH = cornerHeights[2];
          break;
        case 2:
          cornerTLH = cornerBRH = cornerHeights[0];
          cornerTRH = cornerBLH = cornerHeights[1];
          break;
      }
    }

    var shapeTopRightX1, shapeTopRightY1, shapeTopRightX2, shapeTopRightY2, shapeTopRightRotation;
    
    if(cornerShapes == "scoop"){
      shapeTopRightX1 = geom.width;
      shapeTopRightY1 = 0; 
      shapeTopRightX2 = cornerTRW;
      shapeTopRightY2 = cornerTRH;
      shapeTopRightRotation = Math.PI;
    }
    
    let p1 = new Path2D();
    p1.moveTo(cornerTLW, 0);

    p1.lineTo(geom.width - cornerTRW, 0);
    p1.ellipse(shapeTopRightX1, shapeTopRightY1, shapeTopRightX2, shapeTopRightX2, shapeTopRightRotation, 0, Math.PI * 1.5, true);
    
    p1.lineTo(geom.width, geom.height - cornerBRH);
    p1.ellipse(geom.width, geom.height, cornerBRH, cornerBRW, Math.PI * 1.5, 0, Math.PI * 1.5, true);
    
    p1.lineTo(cornerBLW, geom.height);
    p1.ellipse(0, geom.height, cornerBLW, cornerBLH, Math.PI * 2, 0, Math.PI * 1.5, true);

    p1.lineTo(0, cornerTLH);
    p1.ellipse(0, 0, cornerTLH, cornerTLW, Math.PI * .5, 0, Math.PI * 1.5, true);

    p1.closePath();
    
    ctx.fillStyle = backgroundColor;
    
  if(borderWidth > 0){
       ctx.strokeStyle = borderColor; 
  }

      ctx.clip(p1);
      ctx.lineWidth = borderWidth * 2;
      ctx.fill(p1);
      ctx.stroke(p1);
  }
}
registerPaint("cornerShape", cornerShape);