document.addEventListener('DOMContentLoaded',detalles)

function detalles(){
  const ciclistas = document.querySelector('.datoss');
  ciclistas.addEventListener('click',(e)=>{
      if(e.target.classList.contains('estadisticass')){
          const boton = e.target.parentElement;
          const recorrido = boton.getAttribute('recorrido');
          const puntos = boton.getAttribute('puntos');
          const lider = boton.getAttribute('lider');
          const rendimiento = boton.getAttribute('rendimiento');
          grafica(recorrido, puntos, lider, rendimiento)
      }
  })
}

function grafica(recorrido, puntos, lider, rendimiento){
  let value2 = Math.floor(Math.random() * (3150 - 999) + 999);
  let value3 = Math.floor(Math.random() * (3150 - 999) + 999);
  let value4 = Math.floor(Math.random() * (3150 - 999) + 999);
  let value5 = Math.floor(Math.random() * (3150 - 999) + 999);
  let value6 = Math.floor(Math.random() * (3150 - 999) + 999);

  var dom = document.querySelector('.estadisticas');
  var myChart = echarts.init(dom, null,{
    renderer: 'canvas',
    useDirtyRect: false
  });
  var app = {};

  var option;
  setTimeout(function () {
    option = {
      legend: {},
      tooltip: {
        trigger: 'axis',
        showContent: false
      },
      dataset: {
        source: [
          ['etapas', 'Etapa 1', 'Etapa 2', 'Etapa 3', 'Etapa 4', 'Etapa 5', 'Etapa 6'],
          ['Distancia recorrida', recorrido, value2, value3, value4, value5, value6],
          ['Puntos', puntos, value4, value6, value5, value3, value2],
          ['Tiempo lider', lider, value5, value4, value2, value6, value3],
          ['Rendimiento', rendimiento, value3, value4, value6, value2, value5]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {
        gridIndex: 0,
        nameTextStyle: {
          shadowColor : 'red',
          
        }
        },
      grid: { top: '55%' },
      series: [
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          color: 'yellow',
          emphasis: {
            focus: 'series',
            lineStyle: {
              color: 'rgb(218, 202, 19)',
              shadowColor: ' rgb(6, 6, 6)',
              shadowBlur: 10
            }
          }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          color: 'blue',
          emphasis: {
            focus: 'series',
            lineStyle: {
              color: 'rgb(131, 131, 204)',
              shadowColor: 'rgba(0, 0, 0, 0.7)',
              shadowBlur: 10
            }
          }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          color:'red',
           emphasis: {
            focus: 'series',
            lineStyle: {
              color: 'rgb(232, 96, 96)',
              shadowColor: 'rgba(0, 0, 0, 0.7)',
              shadowBlur: 10
            }
          }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          color:'green',
           emphasis: {
            focus: 'series',
            lineStyle: {
              color: 'rgb(105, 225, 141)',
              shadowColor: 'rgba(0, 0, 0, 0.7)',
              shadowBlur: 10
            }
          }
        },  
        {
          type: 'pie',
          id: 'pie',
          radius: '30%',
          center: ['50%', '25%'],
          emphasis: {
            focus: 'self'
          },
          label: {
            formatter: '{b}: {@2012} ({d}%)'
          },
          encode: {
            itemName: 'etapas',
            value: 'Etapa 1',
            tooltip: 'Etapa 1'
          },
          itemStyle: {
            color: function(params) {
              var colors = ['rgb(255, 234, 0)', 'rgb(9, 9, 241)' , 'rgb(235, 19, 19)', 'rgb(21, 224, 81)']; 
              return colors[params.dataIndex % colors.length];
            }
          }
        }
      ]
    };
    myChart.on('updateAxisPointer', function (event) {
      const xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
        const dimension = xAxisInfo.value + 1;
        myChart.setOption({
          series: {
            id: 'pie',
            label: {
              formatter: '{b}: {@[' + dimension + ']} ({d}%)'
            },
            encode: {
              value: dimension,
              tooltip: dimension
            },
          }
        });
      }
    });
    myChart.setOption(option);
  });

  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }

  window.addEventListener('resize', myChart.resize);

}

