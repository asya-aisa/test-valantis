import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader = ({ ...rest }) => {
	return (
		<SkeletonTheme baseColor='#81d8d0' highlightColor='#fff'>
			<Skeleton {...rest} className='loader' />
		</SkeletonTheme>
	)
}

export default SkeletonLoader
