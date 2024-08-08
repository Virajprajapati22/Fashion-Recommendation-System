# Fashion-Recommendation-System
Fashion recommendation system on myntra dataset

### **Site Video:**
[![Watch the video]](./extra/Fashion-Recommendation-Sys-screenvideo.mov)
<video width="320" height="240" controls>
  <source src="./extra/Fashion-Recommendation-Sys-screenvideo.mov" type="video/mp4">
  Your browser does not support the video tag.
</video>

### **Dataset Overview:**

> 14330 Myntra Women Fashion Items.                                                                                                                                                      
> Features of the items are image, description, price, color, ratingsCount, average_ratings, and other(115 features).

### **Content-based RecSys engine:**

1. I have extracted the visual features from the image using VGG16 Pretrained model.
2. Then, extracted the text embeddings from the features like descriptions and other 100 features(Hood, Pocket, Collar, Lehenga Stitch, etc).
3. Because of very high dimension of extracted features I have used PCA to reduce the dimensions by normalizing the extracted features.
4. Concatenated the extracted visual and textual features into one single feature representing particular fashion item.
5. Using this features I have created Content-based Recommendation engine.


---
### **Output of Content-based Recommedations System Using Multi-Modality :**

<img src="https://assets.myntassets.com/assets/images/14709966/2021/7/10/d2407657-1f04-4d13-9f52-9e134050489b1625905793495-Nayo-Women-Red-Ethnic-Motifs-Printed-Empire-Pure-Cotton-Kurt-1.jpg" width="100" height="100">

#### Top 5 Recommendated Products based on above selected item are as follow:

<img src="https://assets.myntassets.com/assets/images/productimage/2021/5/19/3d4648ec-8534-4333-ba00-71f016a7889c1621410078449-1.jpg" width="100" height="100"> <img src="https://assets.myntassets.com/assets/images/15239200/2021/9/16/1ea19add-f8d5-4aa9-9633-8556e078defa1631771234252-Yufta-Women-Kurta-Sets-3291631771233558-1.jpg" width="100" height="100">
<img src="https://assets.myntassets.com/assets/images/17184396/2022/2/17/82e22126-0d9b-40fa-9702-23132fe3d39c1645073332435AHIKAWomenPeach-ColouredEthnicMotifsPrintedPureCottonKurtawi1.jpg" width="100" height="100">
<img src="https://assets.myntassets.com/assets/images/9301311/2019/4/13/3fb5a41d-b86d-4d54-8a95-90b2796465091555145168199-Tissu-Women-Pink-Printed-A-Line-Kurta-2571555145166673-1.jpg" width="100" height="100">
<img src="https://assets.myntassets.com/assets/images/16291462/2021/12/18/f3f56798-f6e1-4f0f-9484-b5e32528b6f61639826766241-DIVASTRI-Women-Lehenga-Choli-3711639826765496-1.jpg" width="100" height="100">
