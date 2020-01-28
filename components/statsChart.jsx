
import { Radar } from 'react-chartjs-2'

function StatsChart (props) {
  const { pokemonName } = props
  const statsData = props.stats.map(stat => stat.base_stat)
  const data = {
    labels: ['Speed', 'Sp Defense', 'Sp Attack', 'Defense', 'Attack', 'Hit Points'],
    datasets: [
      {
        label: 'Max',
        backgroundColor: 'rgba(236, 64, 122,0.2)',
        borderColor: 'rgba(236, 64, 122,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(236, 64, 122,0.4)',
        hoverBorderColor: 'rgba(236, 64, 122,1)',
        data: [180, 230, 194, 230, 190, 255]
      },
      {
        label: 'Min',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(179,181,198,0.4)',
        hoverBorderColor: 'rgba(179,181,198,1)',
        data: [2, 22, 10, 4, 4, 1]
      },
      {
        label: pokemonName,
        backgroundColor: 'rgba(30, 136, 229,0.2)',
        borderColor: 'rgba(30, 136, 229,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(30, 136, 229,0.4)',
        hoverBorderColor: 'rgba(30, 136, 229,1)',
        data: statsData
      }
    ]
  }
  return (
    <Radar
      data={data}
      width={256}
      height={256}
      options={{ maintainAspectRatio: true }}
    />
  )
}

export default StatsChart
