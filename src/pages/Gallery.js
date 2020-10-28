import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import DocumentMeta from "react-document-meta";
import { Container } from "react-bootstrap";
import "../App.css";

function PhotoGallery() {

	const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
	};
	
	const photos = [
		{
			src: "assets/images/gallery/office-gallery (1).jpeg",
			width: 4,
			height: 3
		},
		{
			src: "assets/images/gallery/office-gallery (2).jpeg",
			width: 4,
			height: 3
		},
		{
			src: "assets/images/gallery/office-gallery (3).jpeg",
			width: 3,
			height: 4
		},
		{
			src: "assets/images/gallery/office-gallery (4).jpeg",
			width: 3,
			height: 4
		},
		{
			src: "assets/images/gallery/office-gallery (5).jpeg",
			width: 3,
			height: 4
		},
		{
			src: "assets/images/gallery/office-gallery (6).jpeg",
			width: 4,
			height: 3
		},
		{
			src: "assets/images/gallery/office-gallery (7).jpeg",
			width: 3,
			height: 4
		},
		{
			src: "assets/images/gallery/office-gallery (8).jpeg",
			width: 4,
			height: 3
		},
		{
			src: "assets/images/gallery/office-gallery (9).jpeg",
			width: 4,
			height: 3
		},
		{
			src: "assets/images/gallery/office-gallery (10).jpeg",
			width: 4,
			height: 3
		},
		{
			src: "assets/images/gallery/office-gallery (11).jpeg",
			width: 1,
			height: 1
		},
		{
			src: "assets/images/gallery/office-gallery (12).jpeg",
			width: 1,
			height: 1
		},
		{
			src: "assets/images/gallery/office-gallery (13).jpeg",
			width: 1,
			height: 1
		}
	];

	const meta = {
    title: "Gallery",
    description: "Gallery",
    canonical: "https://www.mbbsadmissionsinabroad.com/gallery",
    // meta: {
    //   charset: "utf-8",
    //   name: {
    //     keywords: "How do I choose an Indian Nursing Recruitment Agency for Abroad",
    //   },
    // },
	};

  return (
		<DocumentMeta {...meta}>
		<div>
			<div className="service__bg">
				<h1 className="service__title">Gallery</h1>
			</div>
			<div className="gallery__grid">
				<Container fluid>
				<Gallery photos={photos} onClick={openLightbox} />
				<ModalGateway>
					{viewerIsOpen ? (
						<Modal onClose={closeLightbox}>
							<Carousel
								currentIndex={currentImage}
								views={photos.map(x => ({
									...x,
									srcset: x.srcSet,
									caption: x.title
								}))}
							/>
						</Modal>
					) : null}
				</ModalGateway>
				</Container>
			</div>
		</div>
		</DocumentMeta>
  );
}

export default PhotoGallery;