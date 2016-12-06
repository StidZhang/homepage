# Note on RapidMiner

## Data Preparation

1. The "Remove Useless Attribute" may not work due to the potential underflow in the operator. Need to write R/Python script for 
such situation.

2. Both "Execute R" and "Execute Python" only accept dataset as input, which will turns out to be 
data table in R or pandas.Dataframe inside the script. For executing model, performaceVector or any other thing, the "Execute Script" use Groovy scripts/Java codes.

## Regression Model in RapidMiner

1. Due to the restriction in RapidMiner, most regression models are included in General Linear Model.

2. Be careful while using macros. Make sure it's defined before the related process start running.

## Two-class model in RapidMiner

1. Remember to convert the label type using "Numerical to Binomial".

## Multi-class model in RapidMiner

1. For Ordinal Regression Model in rapidMiner(unable to find relevant operators), tried to use pure R script to train and test the model. 
Check [here](http://community.rapidminer.com/t5/RapidMiner-Studio/Is-is-possible-to-see-the-output-from-an-R-model-in-Rapidminer/td-p/24472) for samples using R to train and apply models in RapidMiner, and check [here](http://www.uni-kiel.de/psychologie/rexrepos/posts/regressionOrdinal.html) for ordinal regression in R.

2. There's an operator called [Polynominal by Binominal Classification](http://docs.rapidminer.com/studio/operators/modeling/predictive/ensembles/polynomial_by_binomial_classification.html) maybe useful for multi-class models. Note that it cannot be searched out in the operator searching bar. An application related to multi-class model can be seen [here](http://community.rapidminer.com/t5/RapidMiner-Studio/Multi-Class-Labels/td-p/26572).

## Data Storage/Model Application

1. The result after applied a model may be not visible in the default attribute selection list(e.g.confidence(False)).
You need to type them manually if further operation is needed on these attributees.

2. Connection between RapidMiner and MongoDB could be done by NoSQL Extension, but using Python(pymongo)/R(RMongo) is recommended due
to the restriction on such operators. Also note that currently RMongo doesn't seem to support cloud mongoDB database.

