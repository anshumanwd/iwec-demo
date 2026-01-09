import BrandSliderFounder from "@/components/shared/brands/BrandSliderFounder";

const BrandFound = ({ type = 1 }) => {
	return (
        <section className="tj-client-section section-top-gap">
			<div className="container-fluid client-container">
				<div className="row">
					<div className="col-12 mb-5">
						<div
							className="client-content style-2 wow fadeIn"
							data-wow-delay=".3s"
							suppressHydrationWarning
						>
							<h5 className="sec-title">
								Founding & Diamond Sponsors
							</h5>
						</div>
						<BrandSliderFounder />
					</div>
				</div>
			</div>
		</section>
	);
};

export default BrandFound;
