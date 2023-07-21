import { getEtapas, nuevoEtapas, deleteEtapas,getOneID,updateEtapas  } from "./Api.js";

document.addEventListener('DOMContentLoaded',()=>{
    cargaEtapas();
})


async function cargaEtapas(){
    const etapas = await getEtapas();
    const tablaEtapas= document.querySelector('#datosEtapas');
    etapas.forEach(element => {
        const {numeroEtapa, fecha,salida, llegada,distancia,ganador,descripcion,premioMontana} = element
        tablaEtapas.innerHTML += `
        <tr>
            <td>${numeroEtapa}</td>
            <td>${fecha}</td>
            <td>${salida}</td>
            <td>${llegada}</td
            <td>${distancia}</td
            <td>${ganador}</td>
            <td>${descripcion}</td>
            <td>${premioMontana}</td>
           
        
            <td><button type="button" class="btn btn-danger delete" id="">Delete</button></td>
        </tr>
        `
    });
}
const formulario = document.getElementById('registrar');
formulario.addEventListener('submit',newEtapas)
function newEtapas(e){
    e.preventDefault();
    const numeroEtapa = document.getElementById('numeroEtapa').value;
    const fecha = document.getElementById('fecha').value;
    const salida = document.getElementById('salida').value;
    const llegada= document.getElementById('llegada').value;
    const distancia = document.getElementById('distancia').value;
    const ganador = document.getElementById('ganador').value;
    const descripcion = document.getElementById('descripcion').value;
    const  premioMontana = document.getElementById('premioMontana').value;

    const registro = {
        numeroEtapa,
        fecha,
        salida,
        llegada,
        distancia,
        ganador,
        patrocinador,
        descripcion,
        premioMontana
    }
    console.log(registro);
    nuevoEtapas(registro)
    if(validation(registro)){
         alert("todos los datos son obligatorios")
     }return nuevoCiclistas(registro)
}
// function validation(Objecto){
//     return !Object.values(Objecto).every(element=>element == '')
// }

const eliminar = document.querySelector('#datosEtapas')
eliminar.addEventListener('click',borrar)

function borrar(e){
    if(e.target.classList.contains('delete')){
        const idequipos = e.target.getAttribute('id');
        const confir = confirm("desea Eliminarlo?");
        if(confir){
            deleteEquipos(idequipos)
        }
    }
}

//grafica 
import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

let base = 0;
let oneDay = 170000000;
let valueBase = 80;
let valueBase2 = 0;
let data = [];
for (var i = 1; i < 25; i++) {
  data.push([170000000 * i, 10 * i]);
}
option = {
  title: {
    left: 'center',
    text: 'Tootip and dataZoom on Mobile Device'
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
    type: '',
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
        formatter: function (params) {
          return echarts.format.formatTime('yyyy-MM', params.value);
        },
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
      name: 'Fake Data',
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
