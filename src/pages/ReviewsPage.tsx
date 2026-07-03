import CustomerReviewsSection from '@/sections/CustomerReviewsSection';
import GallerySection from '@/sections/GallerySection';

export default function ReviewsPage() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <CustomerReviewsSection />
      <GallerySection />
    </div>
  );
}
