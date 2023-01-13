import React from 'react';
import Classes from './circularprogressbar.module.css';
import {
    VIEWBOX_WIDTH,
    VIEWBOX_HEIGHT,
    VIEWBOX_HEIGHT_HALF,
    VIEWBOX_CENTER_X,
    VIEWBOX_CENTER_Y,
  } from '../CircularBar/constants';
import Path from '../CircularBar/path';

export default function CircularProgressBar ({strokeWidth = 10, maxValue=100, minValue=0, ...props}) {
    function getBackgroundPadding() {
        if (props.background) {
          // Don't add padding if not displaying background
          return 0;
        }
        return props.backgroundPadding;
      }
    
      function getPathRadius() {
        // The radius of the path is defined to be in the middle, so in order for the path to
        // fit perfectly inside the 100x100 viewBox, need to subtract half the strokeWidth
        return VIEWBOX_HEIGHT_HALF - strokeWidth / 2;
      }
    
      // Ratio of path length to trail length, as a value between 0 and 1
      function getPathRatio() {
        const { value } = props;
        console.log(value)
        const boundedValue = Math.min(Math.max(value, minValue), maxValue);
        return (boundedValue - minValue) / (maxValue - minValue);
      }
      const pathRadius = getPathRadius();
      const pathRatio = getPathRatio();
    return (
        <svg 
             viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
             className={Classes.CircularProgressbar}>
               {/* <Path
                  className={Classes.Trail}
                  counterClockwise={ 0 }
                  dashRatio={1}
                  pathRadius={pathRadius}
                  strokeWidth={strokeWidth}
        //          style={styles.trail}
                /> */}

               <Path
                  className={Classes.Path}
                  counterClockwise={ 1 }
                  dashRatio={pathRatio * 1}
                  pathRadius={pathRadius}
                  strokeWidth={strokeWidth}
            //      style={styles.path}
                />

           </svg> 
    )
}
