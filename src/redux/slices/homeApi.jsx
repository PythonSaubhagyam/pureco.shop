import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../../setup/axiosClient";

export const initializeAppData = createAsyncThunk("app/initializeData", async (_, { rejectWithValue }) => {
    try {
        const [
            upperBannersResponse,
            middleBannersResponse,
            purecoResponse,
            blogsResponse,
            statisticsResponse,
            lowerSectionResponse
        ] = await Promise.all([
            client.get("/ecommerce/banners/?sequence=Upper"),
            client.get("/ecommerce/banners/?sequence=Middle"),
            client.get("/pureco-section/"),
            client.get("/home/blogs/"),
            client.get("/statistics-section/"),
            client.get("/lower-section/"),
        ]);

        return {
            upperBanners: upperBannersResponse.data.banner || [],
            middleBanners: middleBannersResponse.data.banner || [],
            purecoSection: purecoResponse.data.data || [],
            blogs: blogsResponse.data.blogs || [],
            statistics: statisticsResponse.data.data || {},
            lowerSection: lowerSectionResponse.data.data || [],
        };
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const bannerSlice = createSlice({
    name: "home",
    initialState: {
        upperBanners: [],
        middleBanners: [],
        purecoSection: {
            ourAboutSection: [],
            ourCertificateSection: [],
            ourBestSellerSection: [],
            ourNonGmoSection: [],
        },
        blogs: [],
        statistics: {},
        lowerSection: {
            awardsSection: [],
            servicesSection: [],
            availableSection: [],
        },
        loader: false,
        error: null,
        hasFetched: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(initializeAppData.pending, (state) => {
                state.loader = true;
            })
            .addCase(initializeAppData.fulfilled, (state, action) => {
                const {
                    upperBanners,
                    middleBanners,
                    purecoSection,
                    blogs,
                    statistics,
                    lowerSection
                } = action.payload;

                state.loader = false;
                state.upperBanners = upperBanners;
                state.middleBanners = middleBanners;
                state.blogs = blogs;
                state.statistics = statistics;
                state.hasFetched = true

                // Organize upperSection data
                state.purecoSection = {
                    ourAboutSection: purecoSection.filter((section) => section.id === 1),
                    ourCertificateSection: purecoSection.filter((section) => section.id === 2),
                    ourBestSellerSection: purecoSection.filter((section) => section.id === 3),
                    ourNonGmoSection: purecoSection.filter((section) => section.id === 4),
                };

                // Organize lowerSection data
                state.lowerSection = {
                    awardsSection: lowerSection.filter((section) => section.id === 1),
                    servicesSection: lowerSection.filter((section) => section.id === 2),
                    availableSection: lowerSection.filter((section) => section.id === 3),
                };
            })
            .addCase(initializeAppData.rejected, (state, action) => {
                state.loader = false;
                state.error = action.payload;
            });
    },
});

export default bannerSlice.reducer;
