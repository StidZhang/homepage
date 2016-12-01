# Documentation on RapidMiner

## Regression Model in RapidMiner

Due to the restriction in RapidMiner, most regression models are included in General Linear Model.

## Two-class model in RapidMiner


## Multi-class model in RapidMiner

## Random Note

1. The "Remove Useless Attribute" may not work due to the potential underflow in the operator. Need to write R/Python script for 
such situation.

2. Both "Execute R" and "Execute Python" only accept dataset as input, which will turns out to be data table/pandas.Dataframe 
inside the script. For executing model, performaceVector or any other thing, the "Execute Script" use Groovy scripts/Java codes.

3. The result after applied a model may be not visible in the default attribute selection list(e.g.confidence(False)).
You need to type them manually if further operation is needed on these attributees.

4. Connection between RapidMiner and MongoDB could be done by NoSQL Extension, but using Python(pymongo)/R(RMongo) is recommended due
to the restriction on such operators. Also note that currently RMongo doesn't seem to support cloud mongoDB database.

