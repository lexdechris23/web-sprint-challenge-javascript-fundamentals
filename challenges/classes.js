// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker1{
    constructor(length,width,height){
    this.length = length;
    this.width = width;
    this.height = height;
    }
    VolumeMethod(length,width,height){ 
        return length * width * height;
    }
    SurfaceArea(length,width,height){ 
        return 2 * (length * width + length * height + width * height)

      }
  }

  const cuboid1 = new CuboidMaker1(4,5,5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cuboid1.VolumeMethod(10,5,2)); // 100
console.log(cuboid1.SurfaceArea(32,1,1)); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


class CubeMaker extends CuboidMaker1 {
    constructor(length,width,height){
        super(length,width,height);
    }
    cubeVolume(length,width,height){
        return length * width * height;
    }
    cubeSurface(length,width,height){
        return 2 * (length*height) + 2 * (width*height) + 2 *(length*width)
    }
}

const cuboid2 = new CubeMaker(5,6,7);


console.log(cuboid2.cubeVolume(19,5,2)); 
console.log(cuboid2.cubeSurface(32,2,1)); 