# RapidMiner Note

## Algorithm Performance(all default configs)

### Regression:

Algorithm | Poisson Regression | Neural Net | Gradient Boosted Tree | Linear Regression
 --- | --- | --- | --- | ---
Root mean squared error | 29.635 | 31.398 | 25.806 | 31.452
Absolute error | 22.889 | 26.313 | 20.746 | 26.430
Relative error | 0.547 | 0.725 | 0.471 | 0.593
Correlation | 0.807 | 0.876 | 0.869 | 0.822

### Binary:
Algorithm | Boosted Tree | Logistic Regression | Random Forest | Neural Network
 --- | --- | --- | --- | ---
Accuracy | 0.910 | 0.910 | 0.900 | 0.910
Precision | 0.864 | 0.944 | 0.941 | 0.900
Recall | 0.760 | 0.680 | 0.640 | 0.720

### Multi-class:
Algorithm | Neural Net | Logistic Regression | Ordinal Regression(logistic)
 --- | --- | --- | ---
Accuracy | 0.880 | 0.890 | 0.910
Weighted mean recall | 0.740 | 0.756 | 0.807
Weighted mean precision | 0.812 | 0.891 | 0.905

## Note about model training

### Data Preparation

1. The [Remove Useless Attribute](http://docs.rapidminer.com/studio/operators/blending/attributes/selection/remove_useless_attributes.html) may not work due to the potential underflow in the inplementation of the operator. Need to write R/Python script for 
such situation.

2. Both [Execute R](http://docs.rapidminer.com/studio/operators/utility/scripting/execute_r.html) and [Execute Python](http://docs.rapidminer.com/studio/operators/utility/scripting/execute_python.html) cannot accept RapidMiner model/PerformanceVector etc. as input, which will turns out to be 
data table in R or pandas.Dataframe inside the script, so an operator like "Performace to Data" is required if a script is needed.. For executing model, performaceVector or any other thing, the "Execute Script" use Groovy scripts/Java codes.

### Regression Model in RapidMiner

1. The design in RapidMiner makes most regression models can be found in General Linear Model.

2. Be careful while using macros. Make sure it's defined before the related process start running.

### Two-class model in RapidMiner

1. Remember to convert the label type using "Numerical to Binomial".

### Multi-class model in RapidMiner

1. For Ordinal Regression Model in rapidMiner(unable to find relevant operators), tried to use pure R script to train and test the model. 
Check [here](http://community.rapidminer.com/t5/RapidMiner-Studio/Is-is-possible-to-see-the-output-from-an-R-model-in-Rapidminer/td-p/24472) for samples using R to train and apply models in RapidMiner, and check [here](http://www.uni-kiel.de/psychologie/rexrepos/posts/regressionOrdinal.html) for ordinal regression in R.

2. There's an operator called [Polynominal by Binominal Classification](http://docs.rapidminer.com/studio/operators/modeling/predictive/ensembles/polynomial_by_binomial_classification.html) maybe useful for multi-class models. Note that it cannot be searched out in the operator searching bar. An application related to multi-class model can be seen [here](http://community.rapidminer.com/t5/RapidMiner-Studio/Multi-Class-Labels/td-p/26572).

## Data Storage/Model Application

1. The result after applied a model may be not visible in the default attribute selection list(e.g.confidence(False)).
You need to specify them manually if further operation is needed on these attributees.

2. Connection between RapidMiner and MongoDB could be done by NoSQL Extension, but using Python(pymongo)/R(RMongo) is recommended due
to the restriction on such operators. Also note that currently RMongo doesn't seem to support cloud mongoDB database. Note that for NoSQL extension, a local meteor mongodb has the name "meteor" for the database and username/password is not required. 

## Scheduled RapidMiner Server Process

Inside RapidMiner Studio(connected to Server), choose the process need to be scheduled, then select Process->Schedule Process on Server, and choose Cron Schedule for detailed schedules. [Source](http://docs.rapidminer.com/server/how-to/schedule-a-process/schedule-from-studio.html) 

Besides having process running at a scheduled time period, it can also be trigger by file changes or incoming mails. [Source](http://docs.rapidminer.com/server/how-to/schedule-a-process/schedule-from-server.html)


## Apply R Model

To import and export an R Model, [save](https://stat.ethz.ch/R-manual/R-devel/library/base/html/save.html) and [load](https://stat.ethz.ch/R-manual/R-devel/library/base/html/load.html) are the functions do the job. Note that an "rda" file extension is often used for R objects. Example code:

```
# Training and Saving
...
library(MASS)
model <- polr(as.factor(label2)~.,method="logistic",data=dataset)
save(model, file="/user/model/ordinal_regression.rda")
-----------
# Loading
...
load("/user/model/ordinal_regression.rda")
prediction <- predict(model, data)
...
```

However, due to the restriction and implementation of RapidMiner Server, so far I cannot find a proper way to save/load an R Model inside RapidMiner Server repo. Therefore, for cloud service purposes with R models, a potential solution is 
[API between Amazon S3 and R](https://github.com/cloudyr/aws.s3), or save the .rda file directly on somewhere on Cloud(Github, Dropbox, etc.) as well as loading.

## Miscellaneous

1. Operator [Free Memory](http://docs.rapidminer.com/studio/operators/utility/misc/free_memory.html) maybe useful, especially for Windows users.
