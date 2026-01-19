import {Ringchart} from '../components/Ringchart';

function App() {
  return (
    <div className="w-full min-h-screen bg-bg-page">
      <Ringchart
        rings={[
          { label: 'Organic', value: 75, maxValue: 100, color: '#7B99FF' },
          { label: 'Social', value: 50, maxValue: 100, color: '#C9D7FD' },
          { label: 'Other', value: 90, maxValue: 100, color: '#28E384' }
        ]}
        total={215}
        type="Users"
        title="Estadistics"
        size={200}
        ringWidth={8}
        gapBetweenRings={4}
      />
    </div>
  )
}

export default App
