// Components
import Metrics from '../Metrics';
import Estadistics from '../Estadistics';
import UserTable from '../UserTable';
import Container from '../../components/Container';

const App = () => {
  return (
    <div className='flex flex-col w-full h-full p-[60px] max-[431px]:p-[32px_16px] gap-[24px]'>
      <div className="flex w-full items-center justify-between">
        <h1 className="text-[22px] font-bold line-height-[32px]">
          Users
        </h1>

        <button className="bg-button-primary w-[137px] text-white px-[16px] py-[8px]">
          Add User
        </button>
      </div>

      <Metrics />

      <Container>
        <Estadistics />
      </Container>

      <Container withOutPadding>
        <UserTable />
      </Container>
    </div>
  )
}

export default App;

// border: 0.6px solid var(--border-primary, #5F5F5F)
// border: 0.6px solid var(--border-primary, #5F5F5F)
// background: var(--surface-secondary, #1A1A1A);
