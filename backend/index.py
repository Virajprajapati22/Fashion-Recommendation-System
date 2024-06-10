import pandas as pd
from fastapi import FastAPI, Query
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import numpy as np

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to the specific domains you want to allow
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the dataset and similarity matrix once
myntra_fashion_df = pd.read_excel("/Users/viru/Documents/GitHub/Fashion-Recommendation-System/backend/myntra-data/myntra-fashion-dataset.xlsx")
similarity_matrix = pd.read_csv("/Users/viru/Documents/GitHub/Fashion-Recommendation-System/backend/myntra-data/similarity_matrix.csv").values

@app.get("/get-myntra-fashion-data")
def get_data(page: int = Query(1, ge=1), page_size: int = Query(10, ge=1, le=100)):
    # Calculate start and end indices
    start = (page - 1) * page_size
    end = start + page_size
    
    # Get the data for the requested page
    paginated_data = myntra_fashion_df.iloc[start:end]
    
    # Convert the data to JSON
    data_json = paginated_data.to_json(orient='records')
    
    return JSONResponse(content=data_json)

# Retrieve top 5 similar products for the given items
def get_top_n_similar_items(product_id, top_n=5):
    # Get the index of product id
    item_index = myntra_fashion_df[myntra_fashion_df['p_id'] == product_id].index[0]

    similarity_scores = similarity_matrix[item_index]
    top_indices = similarity_scores.argsort()[-top_n-1:-1][::-1]  # Exclude the item itself
    return top_indices, similarity_scores[top_indices]

@app.get("/get-similar-products")
def get_similar_products(product_id: int):
    idxs, scores = get_top_n_similar_items(product_id)

    recommendations_list = []

    for i in idxs:
        product_series = myntra_fashion_df.iloc[i]
        product_dict = product_series.to_dict()
        # Clean the dictionary
        clean_product_dict = {k: (None if pd.isna(v) or (isinstance(v, (int, float)) and np.isinf(v)) else v)
                              for k, v in product_dict.items()}
        recommendations_list.append(clean_product_dict)

    return JSONResponse(content=recommendations_list)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
