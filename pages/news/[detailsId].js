import { useRouter } from 'next/router';

// domain/news/somehing-important

function DetailsPage() {
  const router = useRouter();

  const detailsId = router.query.detailsId;

  return <h1>The Details Page</h1>;
}

export default DetailsPage;
