import { getEtapas } from "./Api.js";
document.addEventListener('DOMContentLoaded',detalles)

async function detalles(){
  const etapas = await getEtapas()
  const btn = document.querySelector('.datoss');
  btn.addEventListener('click',(e)=>{
      if(e.target.classList.contains('grafica')){
        const id = e.target.getAttribute('id')
        etapas.forEach(element=>{if(element._id === id){grafica(element.grafica);}});
      }
  })
}
async function grafica(grafica){
    console.log(grafica);
    var dom = document.getElementById('graficas');
    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    var option;
    let base = 40;
    let km = 40;
    let alt = 10;
    let data = [[0,grafica[0].montana],[50,grafica[1].montana],[70,grafica[2].montana],[80,grafica[3].montana],[100,grafica[4].montana]];
    // data.push([10,10])
    // for (var i = 1; i < 6; i++) {
    //   data.push([km * i, alt * i]);
    // }
    // data.push([1000,20])
    // for (let i = 1; i < grafica.length; i++) {
    //     alt = grafica[i-1].montana;
    //     km =  Math.floor(Math.random() * ((km*i)-km)+km);
    //     data.push([km,alt])
    // }
    console.log(data);
    option = {
      title: {
        left: 'center',
        text: 'Herramientas zoom'
      },
      legend: {
        top: 'bottom',
        data: ['Intention']
      },
      tooltip: {
        triggerOn: 'none',
        position: function (pt) {
          return [pt[0], 130];
        }
      },
      //iconos feos de arriba
      toolbox: {
        left: 'center',
        itemSize: 25,
        top: 55,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {}
        }
      },
      xAxis: {
        // type: '',
        axisPointer: {
          value: '1',
          snap: true,
          //linea ------------
          lineStyle: {
            color: 'blue',
            width: 2
          },
          label: {
            show: true,
        
            //datos fecha arriba del circulito
            backgroundColor: 'red'
          },
          //circulito
          handle: {
            show: true,
            color: '#7581BD'
          }
        },
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        axisTick: {
          inside: true
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          inside: true,
          formatter: '{value}\n'
        },
        z: 10
      },
      // tamaños
      grid: {
        top: 110,
        left: 15,
        right: 15,
        height: 160
      },
      //zooom
      dataZoom: [
        {
          type: 'inside',
          throttle: 50
        }
      ],
      //datos
      series: [
        {
          name: 'Altura: ',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          sampling: 'average',
          itemStyle: {
            color: '#0770FF'
          },
          stack: 'a',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(58,77,233,0.8)'
              },
              {
                offset: 1,
                color: 'rgba(58,77,233,0.3)'
              }
            ])
          },
          data: data
        }
      ]
    };

    option && myChart.setOption(option);
}