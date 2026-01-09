import BrandSliderFounder2 from "@/components/shared/brands/BrandSliderFounder2";

const BrandFound2 = ({ type = 1 }) => {
	return (
        <section className="tj-client-section  bg-light mb-5">
			<div className="container-fluid client-container">
				<div className="row">
					<div className="col-12 mb-5 mt-5">
						<div
							className="client-content style-2 wow fadeIn"
							data-wow-delay=".3s"
							suppressHydrationWarning
						>
							<h5 className="sec-title">
								Silver Sponsors, Bronze Sponsors & Friends
							</h5>
						</div>
						<BrandSliderFounder2 />
					</div>
				</div>
			</div>
		</section>
	);
};

export default BrandFound2;
